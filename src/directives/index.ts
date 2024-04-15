import directiveSelection from './selection'
import directiveClickOutSide from "@/directives/click-out-side.ts";
export default function registerDirectives(app: any) {
    directiveSelection(app)
    directiveClickOutSide(app)
}