import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Event } from '../events/events.model';
import { RoleGuard } from './role-guard';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('admin')
@UseGuards(JwtAuthGuard, RoleGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('event')
  async createEvent(@Body() body: typeof Event): Promise<string> {
    return this.adminService.createEvent(body);
  }

  @Patch('event/:id')
  async updateEvent(
    @Param('id') eventId: number,
    @Body() body: typeof Event,
  ): Promise<string> {
    return this.adminService.updateEvent(eventId, body);
  }

  @Delete('event/:id')
  async deleteEvent(@Param('id') eventId: number): Promise<string> {
    return this.adminService.deleteEvent(eventId);
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') userId: number): Promise<string> {
    return this.adminService.deleteUser(userId);
  }
}
