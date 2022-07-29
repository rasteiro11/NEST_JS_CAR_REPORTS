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
exports.Estimate = void 0;
const typeorm_1 = require("typeorm");
const report_entity_1 = require("./report.entity");
let Estimate = class Estimate {
};
__decorate([
    typeorm_1.ViewColumn({ name: 'lat' }),
    __metadata("design:type", Number)
], Estimate.prototype, "lat", void 0);
__decorate([
    typeorm_1.ViewColumn({ name: 'lat_min' }),
    __metadata("design:type", Number)
], Estimate.prototype, "latMin", void 0);
__decorate([
    typeorm_1.ViewColumn({ name: 'lat_range' }),
    __metadata("design:type", Number)
], Estimate.prototype, "latRange", void 0);
__decorate([
    typeorm_1.ViewColumn({ name: 'lat_norm' }),
    __metadata("design:type", Number)
], Estimate.prototype, "latNorm", void 0);
Estimate = __decorate([
    typeorm_1.ViewEntity({
        expression: (connection) => connection
            .createQueryBuilder()
            .select(['lat', 'lat_min', 'lat_range'])
            .addSelect('(lat - lat_min) / lat_range', 'lat_norm')
            .from((subQuery) => subQuery
            .select('lat')
            .addSelect('min(lat) OVER ()', 'lat_min')
            .addSelect('(max(lat) OVER ()) - (min(lat) OVER ())', 'lat_range')
            .from(report_entity_1.Report, 'report'), 'normalized_sales'),
    })
], Estimate);
exports.Estimate = Estimate;
//# sourceMappingURL=estimate.entity.js.map