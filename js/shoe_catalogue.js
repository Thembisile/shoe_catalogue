function shoe_catalogue(storedItems) {


    let itemsData = [
        { color: 'Turqoise', brand: 'Seccio', price: 485, size: 6, in_stock: 3, id: 1 },
        { color: 'PowderBlue', brand: 'Seiko', price: 320, size: 7, in_stock: 6, id: 2 },
        { color: 'Beige', brand: 'Pealy', price: 480, size: 8, in_stock: 12, id: 3 },
        { color: 'Yellow', brand: 'Spaghetti', price: 220, size: 9, in_stock: 9, id: 4 },
        { color: 'Brown', brand: 'Chank', price: 150, size: 10, in_stock: 17, id: 5 }
    ];

    function returnItemsData(){
        return itemsData;
    }

    let shoes = [];

    if (storedItems && storedItems.length > 0) {
        let itemsData = [];

        for (let i = 0; i < storedItems.length; i++) {
            const shoes = storedItems[i];
            itemsData.push(shoes)
        }
    }

    function error() {
        if (shoes.length === 0) {
            return "Oops!, No Shoe Found"
        }
    }

    function addShoe(Size, Color, Brand, In_Stock, Amount){
        for (let i = 0; i < itemsData.length; i++) {
            const result = itemsData[i];
            if (Size === result.size && Color === result.color && Brand === result.brand) {
                result.in_stock += In_Stock;
                result.price += Amount;
                return true;
            }
        }
    }


    return {
        error,
        returnItemsData,
        addShoe
    }
}