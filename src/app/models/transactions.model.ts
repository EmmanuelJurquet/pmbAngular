export class Transactions{

public receiverfullname: string;
public designation: string;
public amount: number;

constructor( s: string , d: string , w: number ) {
this.receiverfullname	= s;
this.designation		= d;
this.amount				= w;
}
}
