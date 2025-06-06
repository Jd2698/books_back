import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersService } from '../users/users.service'
import { PrismaService } from 'src/prisma.service'
import { UsersModule } from '../users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { UsersRolesService } from '../users_roles/users_roles.service'
import { RolesService } from 'src/modules/roles/roles.service'
import { GoogleAuthService } from './google-auth.service'

@Module({
	imports: [
		UsersModule,
		JwtModule.register({
			global: true,
			secret: process.env.SECRET_JWT,
			signOptions: { expiresIn: '15m' }
		})
	],
	controllers: [AuthController],
	providers: [
		AuthService,
		GoogleAuthService,
		UsersService,
		UsersRolesService,
		PrismaService,
		RolesService
	]
})
export class AuthModule {}
