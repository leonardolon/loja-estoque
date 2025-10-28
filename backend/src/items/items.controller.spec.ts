import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

describe('ItemsController', () => {
  let controller: ItemsController;
  let service: ItemsService;

  const mockItemsService = {
    findAll: jest.fn().mockResolvedValue({
      data: [],
      total: 0,
      page: 1,
      limit: 10,
      totalPages: 0,
    }),
    findOne: jest.fn().mockResolvedValue({
      id: '1',
      name: 'Item 1',
      quantity: 10,
      status: 'todo',
    }),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    sellItem: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [{ provide: ItemsService, useValue: mockItemsService }],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all items', async () => {
    const result = await controller.findAll();
    expect(result.data).toEqual([]);
  });

  it('should return one item', async () => {
    const item = await controller.findOne('1');
    expect(item.id).toBe('1');
  });
});
