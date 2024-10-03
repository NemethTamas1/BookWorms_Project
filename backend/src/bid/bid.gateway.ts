import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  MessageBody,
  ConnectedSocket,
  WsResponse,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { ApplicationsService } from '../applications/applications.service';

@WebSocketGateway()
export class BidGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('BidGateway');
  private applicationService = new ApplicationsService();

  //getMaxBids esemeny letrehozasa, ami a cliens oldalrol hivhato
  @SubscribeMessage('getMaxBids')
  async handleEvent(
    @MessageBody() data: {},
    @ConnectedSocket() client: Socket,
  ): Promise<{}> {
    // A legnagyobb licit lekerese a konyvekhez a db-bol
    data = await this.applicationService.getApplicationBids()
    return data;
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}