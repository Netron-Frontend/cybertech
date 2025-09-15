"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormBookingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FormBookingService = class FormBookingService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBooking(data) {
        return this.prisma.formBooking.create({
            data: {
                name: data.name,
                date: data.date,
                time: data.time,
                guestsCount: data.guestsCount,
                phoneNumber: data.phoneNumber,
                notes: data.notes,
                status: 'PENDING'
            }
        });
    }
    async getBookings() {
        return this.prisma.formBooking.findMany();
    }
    async updateBookingStatus(id, status) {
        return this.prisma.formBooking.update({
            where: { id },
            data: { status }
        });
    }
};
exports.FormBookingService = FormBookingService;
exports.FormBookingService = FormBookingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FormBookingService);
//# sourceMappingURL=form-booking.service.js.map