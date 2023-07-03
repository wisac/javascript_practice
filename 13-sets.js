/*SETS
    Sets are a linear data structure in which values may only OCCUR ones.
    Set is available since ES2015 as a type where equality is checked with ===.
    */

    /*CREATING A SET 
        Set can be created using the Set constructor function. Just as maps, an array or iterable object can be passed to the constructor function to initialize values.

        NB: When duplicate values are passed, only one is added.
        */

        let days = new Set(
            [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Fri", // dup would be ignored
                "Sat",
                "Sun"
            ]
        );

        console.log(days.size); // 7 

        /* Set Methods:
            add() - adds new unique elements to set
            size - contains size of set
            delete() - deletes element in a set
            clear() - deletes all elements in list
            has() - returns a boolean indicating presence of absence of element
            keys() - returns iterator container values of the set
            values() - returns iterator containing values of set
            entries() - returns iterator containing value-value pairs
            */
            let wholeNum = [1,2,3,4];
            let natNum = new Set(wholeNum);
            natNum.add(5)
            .add(6)
            .add(7);

            console.log(natNum.has(6));
            console.log(natNum.delete(7));


            /* ITERATING OVER SETS 
                Just like Maps, the keys(), values() and entries() methods are available for iterating over values of the set. 
                Both the keys() and values() method returns an iterator for the values of the set.
                The entries() method returns an array with two entries both which ar values.
            */

                for (let day of days.keys()) {
                    console.log(day);
                }

                for (let day of days.values()) {
                    console.log(day);
                }

                for (let day of days.entries()) {
                    console.log(day);
                }

                

                /* USING WEAK SETS */
                /* Analogous to weak maps for maps, there is the weak sets alternativefor sets, represented by the type WeakSet. This means that theobjects that are no longer referenced elsewhere are regularlydeleted from the set during garbage collection. Weak sets, like weakmaps, do not provide the keys(), values(), and entries() methods,and they do not have a size property or a clear() method. Inaddition, it’s also true here that no primitive data types can be addedas values of a weak set.
                */

                
            