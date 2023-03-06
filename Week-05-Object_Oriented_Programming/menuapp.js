console.log(11111)

class Menu {

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.create();
                    break;
                case '2':
                    this.delete();
                    break;
                case '3':
                    this.list();
                default: 
                    selection = 0;
            }
            selection = this.showMainMenueOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create 
            2) delete
            `);
    }
}

let menu = new Menu();
    menu.start;

