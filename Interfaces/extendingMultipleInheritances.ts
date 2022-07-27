class Control {
    private state: boolean
}

interface StateFulControl extends Control {
    enable(): void
}

class Button extends Control implements StateFulControl {
    enable(): void {
        console.log('Button extends Control.');
        
    }
}

class TextBox extends Control implements StateFulControl {
    enable(): void {
        
    }
}

class Laben extends Control {

}

// Error: cannot implement
// class Chart implements StateFulControl {
//     enable(): void {
        
//     }
// }

let button = new Button();
button.enable();