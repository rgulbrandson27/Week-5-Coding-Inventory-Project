class Item {
    constructor(title, price, minAge, maxAge, notes) {
        this.title = title;
        this.price = price;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.notes = notes;
    }

    describeItem() {
        return `Title: ${this.title}
        Price: ${this.price}
        Ages: ${this.minAge} to ${this.maxAge}
        Notes: ${this.notes}'
    }
}

class Category {
    constructor(categoryName) {
        this.categoryName = categoryName;
        this.items = [];
    }

    addItem(item) {
        if (item instanceof Item) {
            this.items.push(item);
        }   else {
            throw new Error(`${item} is not a listed item.`)
        }
    }
}
    describe() {
        return `Category: ${category} has ${this.items.length} items.`;
    }
}

//=========================================================

class Menu {
    constructor() {
        this.categories = [];    
        this.selctedCategory = null;  
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 5) {                        
            switch (selection) {
                case '1':
                    this.createCategory();
                    break;
                case '2':
                    this.viewCategory);
                    break;
                case '3':
                    this.deleteCategory();
                    break;
                case '4':
                    this.displayCategories();
                    break;
                case '5':
                    this.exitProgram();
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Program Exited');
    }
    
    showMainMenuOptions() {
        return prompt(`
            1) Create New Category
            2) View Category
            3) Delete Category
            4) Display All Categories
            5) Exit Program
        `);
    }

    showCategoryMenuOptions(categoryInfo) {
        return prompt(`
        0) Back
        1) Create item
        2) Delete item
        --------------------------
        ${categoryInfo}
        `);
    }
    createNewCategory() {
        let category = prompt('Enter new category name:');
        this.categories.push(new Item(title));
    }
    viewCategory() {
        let index = prompt('Enter the category you wish to view:');
            if (index > -1) && index < this.categories.length) {
                this.selctedCategory = this.categories[index];
                let description = 'Category Name: ' + this.selectedCategory.category + '\n';

                for (let i = 0; i < this.selctedCategory.items.length; i++) {
                    description += i + ') ' + this.selectedCategory.items[i].title + ' - '
                    + this.selectedCategory.item[i].position + '\n':
                }

                let selection = this.showCategoryMenuOptions(description)
                switch (selection) {
                    case '1':
                        this.createItem();
                        break;
                    case '2':
                        this.deleteItem();
                }
            }
        }
    }
    
    displayCategories() {
        let categoryString = '';
        for (let i = 0; i < this.categories.length; i++) {
            categoryString += i + ') ' + this.categories[i].title + '\n';
        }
        alert(categoryString);
    }

    deleteCategory() {
        let index = prompt('Enter the index of the category you wish to delete:');
        if (index > -1 && index < this.categories.length) {
            this.teams.splice(index, 1);
            }
        }
          
    creteItem() {
        let title = prompt('Enter new Title:');
        let price = prompt('Enter Price:')
        let minAge = prompt('Enter min. age:')            
        let maxAge = prompt('Enter max. age:')
        let notes = notes('Enter notes:')
        this.selectedCategory.items.push(new Item(title, price, minAge, maxAge, notes));
        }

    deleteItem() {
        let index = prmopt('Enter the index of the item you wish to delete:');
        if (index > -1 && index < this.selectedCategory.items.length) {
            this.selectedCategory.items.splice(index, 1);
        }
    }

}
    // displayItems() {
    //     let itemString = '';
    //     for (let i = 0; i < this.item.length; i++) {
    //         itemString += i + ') ' + this.items[i].name + '\n';
    //     }
    //     alert(itemString);
    //     }
    // }
    //     let selection = this.showCategorytMenuOptions(description);
    //     switch (selection) {
    //         case '1':                    
    //         this.createItem();
    //             break;
    //         case '2':
    //         this.deleteItem();
    
 let menu = new Menu();
 menu.start();