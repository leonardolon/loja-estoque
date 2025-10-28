import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ItemsService', () => {
  let service: ItemsService;
  let prisma: PrismaService;

  const mockItem = {
    id: '1',
    name: 'Item 1',
    quantity: 10,
    status: 'todo',
  };

  const mockPrismaService = {
    item: {
      findUnique: jest.fn().mockResolvedValue(mockItem),
      findMany: jest.fn().mockResolvedValue([mockItem]),
      count: jest.fn().mockResolvedValue(1),
      create: jest.fn().mockResolvedValue(mockItem),
      update: jest.fn().mockResolvedValue(mockItem),
      delete: jest.fn().mockResolvedValue(mockItem),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should remove an item', async () => {
    const result = await service.remove('1');
    expect(result).toHaveProperty('message', 'Item removido com sucesso');
  });
});
