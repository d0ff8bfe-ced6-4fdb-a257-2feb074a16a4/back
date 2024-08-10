import { Module } from '@nestjs/common';
import { UserModule } from '@user/user.module';
import { PrismaModule } from '@prisma/prisma.module';
import { AuthModule } from '@auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@auth/guards/jwt-auth-guard';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProjectModule } from './project/project.module';
import { BoardModule } from './board/board.module';
import { CardModule } from './card/card.module';
import { TaskModule } from './task/task.module';
import { TagModule } from './tag/tag.module';
import { DocumentModule } from './document/document.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            serveRoot: '/upload', // Укажите корневой путь, по которому будут доступны статические ресурсы
            rootPath: join(__dirname, '..', 'upload'), // Укажите путь к папке upload
        }),
        UserModule,
        PrismaModule,
        AuthModule,
        ConfigModule.forRoot({ isGlobal: true }),
        UploadModule,
        ProjectModule,
        BoardModule,
        CardModule,
        TaskModule,
        TagModule,
        DocumentModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
})
export class AppModule {
}
