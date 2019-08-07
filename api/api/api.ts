export * from './spendings.service';
import { SpendingsService } from './spendings.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [SpendingsService, UserService];
