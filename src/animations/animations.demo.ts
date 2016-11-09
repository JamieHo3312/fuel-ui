import {NgModule} from "@angular/core";
import {CollapseDemo} from "./Collapse/Collapse.Demo";
import {FuelUiModule} from "../index";

const animationsDemoComponents = [
    CollapseDemo
]

@NgModule({
    imports: [
        FuelUiModule
    ],
    declarations: [
        ...animationsDemoComponents
    ],
    exports: [
        ...animationsDemoComponents
    ]
})
export class FuiAnimationsDemoModule { }

export * from "./Collapse/Collapse.Demo";