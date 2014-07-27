var oldestLivingParent = function (people) {
    var length = people.length,
        result = people[0].age;
    while (length--) {
        if (result < people[length].age) {
            result = people[length].age;
        }
    }
    return result;
};