/**
 * Literal types
 * 
 * - Allow you to specify a var can only be one specific literal Value and no other
 */

// String Literal Types

let color: "red" | "blue" | "green";

// color = "yellow" -> invalid

// numeric Literal types
let number: 1 | 2 | 3;

// number = 4 -> invalid

// boolean Literal types

let isTrue: true;

// isTrue = false -> error