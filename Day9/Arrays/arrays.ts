let brothers: {firstName: string; weight: number} []= [
    {
        firstName: "Johnny",
        weight: 150,
    },
    {
        firstName: "Jimmy",
        weight: 160,
    },
    {
        firstName: "James",
        weight: 170,
    }
];
console.log("We are three brothers:");
for (let i = 0; i < brothers.length; i++){
    console.log(brothers[i])
}
