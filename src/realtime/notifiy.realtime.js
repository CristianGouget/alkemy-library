import { SocketSettings } from "./socket.realtime.js";

export class NotificationSettings extends SocketSettings {
    constructor(io, customEventListener) {
        super(io, customEventListener);
    }

    // Sobrescribir únicamente el comportamiento de handleConnection
    handleConnection(socket) {
        console.log(`Usuario conectado`);
      // Ejecutar el eventListener personalizado
        if (this.eventListener) {
            this.eventListener(socket);
        }
    }
}