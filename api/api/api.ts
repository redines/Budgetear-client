export * from './purchases.service';
import { PurchasesService } from './purchases.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [PurchasesService, UserService];
