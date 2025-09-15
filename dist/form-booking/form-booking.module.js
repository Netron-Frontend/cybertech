"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormBookingModule = void 0;
const form_booking_controller_1 = require("./form-booking.controller");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const form_booking_service_1 = require("./form-booking.service");
let FormBookingModule = class FormBookingModule {
};
exports.FormBookingModule = FormBookingModule;
exports.FormBookingModule = FormBookingModule = __decorate([
    (0, common_1.Module)({
        controllers: [form_booking_controller_1.BookingController],
        providers: [form_booking_service_1.FormBookingService, prisma_service_1.PrismaService],
        exports: [form_booking_service_1.FormBookingService],
    })
], FormBookingModule);
//# sourceMappingURL=form-booking.module.js.map