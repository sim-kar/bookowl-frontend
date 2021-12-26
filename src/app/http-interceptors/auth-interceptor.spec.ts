import { AuthInterceptor } from './auth-interceptor';
import { TokenStorageService } from '../services/token-storage.service';

describe('AuthInterceptor', () => {
  it('should create an instance', () => {
    expect(new AuthInterceptor(new TokenStorageService())).toBeTruthy();
  });
});
