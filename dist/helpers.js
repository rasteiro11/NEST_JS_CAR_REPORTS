"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupHelpers = void 0;
const common_1 = require("@nestjs/common");
const cookieSession = require('cookie-session');
const setupHelpers = (app) => {
    app.use(cookieSession({
        keys: ['asdfasfd'],
    }));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
};
exports.setupHelpers = setupHelpers;
//# sourceMappingURL=helpers.js.map