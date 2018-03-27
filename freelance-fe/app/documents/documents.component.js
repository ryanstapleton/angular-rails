"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "My First Document",
                description: "Something",
                file_url: "http:/google.com",
                updated_at: "11/11/11",
                image_url: "https://membermouse.com/wp-content/uploads/2016/09/Freelancer-Liability-Featured.png",
            },
            {
                title: "My Second Document",
                description: "Something",
                file_url: "http:/google.com",
                updated_at: "11/11/11",
                image_url: "https://membermouse.com/wp-content/uploads/2016/09/Freelancer-Liability-Featured.png",
            },
            {
                title: "My Third Document",
                description: "Something",
                file_url: "http:/google.com",
                updated_at: "11/11/11",
                image_url: "https://membermouse.com/wp-content/uploads/2016/09/Freelancer-Liability-Featured.png",
            }
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html',
            styleUrls: ['document.component.css']
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map