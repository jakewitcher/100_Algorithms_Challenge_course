import { NumsEnum, StrEnum } from './example-enum';
import { INumsExample } from './example-interface';

type numExample = { num1: number, num2: number } // like an Elm type Alias
type insection = INumsExample & numExample; // combining types to make a new type

function add(nums: insection): number { // using the combined type
    return (nums.num1 + nums.num2)
}

add({ num1: 1, num2: 2, num3: 3, num4: 4 }); // expects parameter equal to combined type




function concatStr(str1: StrEnum, str2: StrEnum): string {
    return (str1 + str2)
}

concatStr(StrEnum.Str1, StrEnum.Str2);