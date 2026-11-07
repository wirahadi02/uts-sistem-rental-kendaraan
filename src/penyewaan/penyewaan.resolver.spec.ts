import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PenyewaanResolver } from './penyewaan.resolver';
import { PenyewaanService } from './penyewaan.service';

describe('PenyewaanResolver', () => {
  const service = {
    findAll: vi.fn(),
    findOne: vi.fn(),
  };
  const resolver = new PenyewaanResolver(
    service as unknown as PenyewaanService,
  );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns all rentals from the service', async () => {
    const rentals = [{ id: 1 }, { id: 2 }];
    service.findAll.mockResolvedValue(rentals);

    await expect(resolver.daftarPenyewaan()).resolves.toEqual(rentals);
    expect(service.findAll).toHaveBeenCalledOnce();
  });

  it('returns the requested rental from the service', async () => {
    const rental = { id: 7 };
    service.findOne.mockResolvedValue(rental);

    await expect(resolver.penyewaan(7)).resolves.toBe(rental);
    expect(service.findOne).toHaveBeenCalledWith(7);
  });

  it('propagates errors from the service', async () => {
    const error = new Error('Rental not found');
    service.findOne.mockRejectedValue(error);

    await expect(resolver.penyewaan(999)).rejects.toBe(error);
  });
});
