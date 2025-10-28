import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Item } from '@prisma/client';
import { CreateItemDto, UpdateItemDto } from './items.dto';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(search?: string, page = 1, limit = 10) {
    try {
      const skip = (page - 1) * limit;

      const where: Prisma.ItemWhereInput = search
        ? { name: { contains: search, mode: 'insensitive' } }
        : {};

      const [items, total] = await Promise.all([
        this.prisma.item.findMany({
          where,
          skip,
          take: limit,
          orderBy: { createdAt: 'desc' },
        }),
        this.prisma.item.count({ where }),
      ]);

      return {
        data: items,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch {
      throw new HttpException(
        'Erro ao buscar itens',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string): Promise<Item> {
    const item = await this.prisma.item.findUnique({ where: { id } });
    if (!item) {
      throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
    }
    return item;
  }

  async create(data: CreateItemDto): Promise<Item> {
    try {
      return await this.prisma.item.create({ data });
    } catch {
      throw new HttpException(
        'Erro ao criar item. Verifique os dados enviados.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: string, data: UpdateItemDto): Promise<Item> {
    const exists = await this.prisma.item.findUnique({ where: { id } });
    if (!exists) {
      throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
    }

    try {
      return await this.prisma.item.update({ where: { id }, data });
    } catch {
      throw new HttpException(
        'Erro ao atualizar item',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string): Promise<{ message: string }> {
    const exists = await this.prisma.item.findUnique({ where: { id } });
    if (!exists) {
      throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
    }

    try {
      await this.prisma.item.delete({ where: { id } });
      return { message: 'Item removido com sucesso' };
    } catch {
      throw new HttpException(
        'Erro ao deletar item',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async sellItem(id: string, quantity: number): Promise<Item> {
    const item = await this.prisma.item.findUnique({ where: { id } });

    if (!item) {
      throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
    }

    if (item.quantity < quantity) {
      throw new HttpException(
        'Quantidade insuficiente em estoque',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newQuantity = item.quantity - quantity;

    return await this.prisma.item.update({
      where: { id },
      data: { quantity: newQuantity },
    });
  }
}
