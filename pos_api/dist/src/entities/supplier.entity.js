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
exports.Supplier = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
let Supplier = class Supplier {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Id', type: 'int' }),
    __metadata("design:type", Number)
], Supplier.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Name', type: 'nvarchar', length: 100 }),
    __metadata("design:type", String)
], Supplier.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Phone', type: 'varchar', length: 50, unique: true, default: '' }),
    __metadata("design:type", String)
], Supplier.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Email', type: 'varchar', length: 100, unique: true, default: '' }),
    __metadata("design:type", String)
], Supplier.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Address', type: 'nvarchar', length: 500, default: '' }),
    __metadata("design:type", String)
], Supplier.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (p) => p.supplier),
    __metadata("design:type", Array)
], Supplier.prototype, "products", void 0);
Supplier = __decorate([
    (0, typeorm_1.Entity)({ name: 'Suppliers' })
], Supplier);
exports.Supplier = Supplier;
