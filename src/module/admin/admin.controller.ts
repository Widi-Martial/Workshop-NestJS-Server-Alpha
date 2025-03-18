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
  async createEvent(@Body() body: Event): Promise<string> {
    console.log(body);
    return 'this create event';
  }

  @Patch('event/:id')
  async updateEvent(@Param('id') eventId: number): Promise<string> {
    console.log(eventId);
    return 'this update event';
  }

  @Delete('event/:id')
  async deleteEvent(@Param('id') eventId: number): Promise<string> {
    console.log(eventId);
    return 'this deleted event';
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') userId: number): Promise<string> {
    console.log(userId);
    return 'this deleted event';
  }
}
