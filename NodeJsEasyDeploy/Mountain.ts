export interface Mountain {
    height: number;
    name: string;
}

export function findNameOfTallestMountain(mountainArray: Mountain[]) {
    let tallest: Mountain = { name: "", height: 0 };

    mountainArray.forEach(function (value) {
        if (value.height > tallest.height) {
            tallest = value;
        }
    });

    return tallest.name;
}