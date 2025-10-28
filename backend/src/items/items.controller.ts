import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto, UpdateItemDto } from './items.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os itens com busca opcional e paginação',
  })
  async findAll(
    @Query('search') search?: string,
    @Query('page') page = '1',
    @Query('limit') limit = '10',
  ) {
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    return this.itemsService.findAll(search, pageNumber, limitNumber);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar item por ID' })
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo item' })
  create(@Body() data: CreateItemDto) {
    return this.itemsService.create(data);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar item por ID' })
  update(@Param('id') id: string, @Body() data: UpdateItemDto) {
    return this.itemsService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar item por ID' })
  remove(@Param('id') id: string) {
    return this.itemsService.remove(id);
  }

  @Post('sell/:id')
  @ApiOperation({ summary: 'Vender item (reduz estoque)' })
  sellItem(@Param('id') id: string, @Body('quantity') quantity: number) {
    return this.itemsService.sellItem(id, quantity);
  }
}
