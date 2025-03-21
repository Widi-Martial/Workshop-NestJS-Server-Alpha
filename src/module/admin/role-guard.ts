import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.user.isAdmin) {
      throw new UnauthorizedException('Something bad happened', {
        cause: new Error(),
        description: 'You do not have permission to perform this action',
      });
    }
    return true;
  }
}
