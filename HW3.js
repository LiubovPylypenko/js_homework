'number' + 3 + 3 // 'number' + 3 = 'number3' + 3 = 'number33';

null + 3  //  null= 0;  0 +  3  =  3; 

5 && "qwerty"  // true && "qwerty"  = "qwerty";

+'40' + +'2' + "hillel";  // +'40' = 40;   +'2' = 2;     40 + 2 = 42;    42 + "hillel" = "42hillel";

'10' - 5 === 6; //  10 - 5 = 5;     5 === 6  = false

true + false  //  true = 1;   false = 0;   1 + 0  = 1;

'4px' - 3  //  NaN;

'4' - 3    //  4 - 3 = 1;

'6' + 3 ** 0; //   3 ** 0  = 1;   '6' + 1 =  '61';

12 / '6'  //  12 / 6 = 2;

'10' + (5 === 6);  //   (5 === 6)  =  false;     '10' + false  =  '10false';

null == ''   //  null = 0;    '' =  0;     0 == 0  =  true;

3 ** (9 / 3);  //  9 / 3 = 3;      3 ** 3 =  27;

!!'false' == !!'true'  //  'false' =  true;    'true' =  true;      true == true  = true;
 
0 || '0' && 1  //   '0' = true;  true = 1;  1 && 1 = 1;  0 || 1  = 1;

(+null == false) < 1;  //  +null = +0 = 0;  0 == false = true;   true  < 1  =  1 < 1 = false;

false && true || true  //  false && true =  false;    false ||  true = true;

false && (false || true);  // false || true = true;   false && true =  false;

(+null == false) < 1 ** 5;  // +null = +0 = 0;   (0 == false) =  (0 == 0) =  true;  1 ** 5 = 1;    true < 1  =  1 < 1 = false; 