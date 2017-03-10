import { OnInit } from '@angular/core';
import { MenuOptions } from './menu-options.service';
export declare class MenuContainerComponent implements OnInit {
    menuOptions: MenuOptions;
    private options;
    private button;
    private gutter;
    private wings;
    private startAngles;
    private menuContainerStyle;
    private menuBtnStyle;
    private menuListStyle;
    private allowTransition;
    private dragStart;
    private svgPath;
    private menuState;
    private positionClass;
    private textRotate;
    private textAnchor;
    constructor(menuOptions: MenuOptions);
    ngOnInit(): void;
    animationDone(): void;
    toggleMenu(): void;
    onPanStart(): void;
    onPanEnd(): void;
    onMenuMove(event: any): void;
    private calculateMenuContainerPosition();
    private setElementsStyle();
    private calculateSvgPath();
}