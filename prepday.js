// বেসিক কনসেপ্ট চেকলিস্ট/সেলফ এসেসমেন্ট: 
// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 

// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 


//  let abbas = "kaalu kha";
//  abbas = "jobbar"
//  console.log(typeof(abbas));
//  console.log(abbas);

// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

// for(let i=7; i<= 19; i++){
//     if(i%2 !== 0){
//         console.log(i);

//     }
// }

// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

// let cow =['milk', 'skin', 'horn', 'meat'];
// cow[3] = 'leg';
// cow.push('farm','village');
// cow.pop();
// console.log(cow);
// for (let i = 0; i<=cow.length; i++) {
//     let recipe = cow[i];
//     console.log(recipe);
// }

// for (let cows of cow) {
//     console.log(cows);
// }

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

// const array = [10,20,30,80,84,90,95];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if(element>80){
//         console.log(element);

//     }
    
// }


// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

// function multiply(num1 , num2, num3) {
//     return num1*num2*num3;    
// }
// let guun = multiply(4,5,6)
// console.log(guun);

// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
 
// const goat ={
//     name: 'redgoat',
//     length: '45inch',
//     weight: 0
// }

// goat.weight = 45;

// console.log(goat);

// প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : 



// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

// function feetToInch(number) {

//    let inch = number*12;
//     return inch;
// }
// console.log(feetToInch(5.7));

// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// -এইবার ভালো করে খেয়াল করো। 
// -প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
// -সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
// -তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

// function paperRequirements(f_book, s_book, t_book) {
//         let first_book = f_book*100;
//         console.log('first book need'+' '+first_book);
//         let second_book = s_book*200;
//         console.log('second book need'+' '+second_book);
//         let third_book = t_book*300;
//         console.log('third book need'+' '+third_book);
//         return first_book+second_book+third_book;
// }
// console.log('Total page need'+' '+ paperRequirements(2, 3, 4));

// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

// var friends = ['rahim', 'karim', 'selim', 'jobbar_uddin'];
// function bestFriend(friendName) {
//     let friendlength =friendName[0].length;
//     let positionOfFriend = friendName[0];
//     for (let index = 0; index <friendName.length; index++) {
//         const friend = friendName[index].length;
//         if (friend>friendlength) {
//             positionOfFriend = friendName[index];
//             friendlength = friend;
//         }
//     }
//     return positionOfFriend;
// }

// let output=bestFriend(friends);
// console.log(output);


// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 


//  let numbers = ['5', '6', '-9', '8', '-7', '10', '2'];
//  let newNumbers = [];

// function numberGame() {
//     for (let index = 0; index < numbers.length; index++) {
        
//         const element = numbers[index];
//         if (element>0) {
//             newNumbers.push(element);
            
//         } else if(element<=0){
//             break;
//         }
//      }
//      return newNumbers;
// }
// console.log(numberGame());

