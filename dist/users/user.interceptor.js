"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInterceptor = void 0;
class UserInterceptor {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async intercept(context, handler) {
        const request = context.switchToHttp().getRequest();
        const user = await this.usersService.findOne(request.session.userId);
        request.user = user;
        return handler.handle();
    }
}
exports.UserInterceptor = UserInterceptor;
//# sourceMappingURL=user.interceptor.js.map