/* Maps refers to data structures in which key-value pairs can be stored.
    Keys are used to retrieve values and thereofore must be unique */

/* CREATING MAPS 
    Maps are of the type Map in Js 
    They can be created using the appropriate constructor function
    An array of arrays can be passed to the function where the first element represent the key and the second represent the value*/

    let studentAges = new Map(
        [
            ["John",21],
            ["Jane", 19],
            ["Kane",24],
            ["Phil",21],
            ["Kate",20]
        ]
    );

    /* Map methods:
        set() - adds key-value pair to the map
        get() - returns value associated by key
        has() - Returns a boolean indicating presence of absence of a key
        delete() - deletes value of a key, return boolean as  status
        clear() - delete all key-value pairs from the map
        size - Contains the number of key-value pairs in the map
        entries() - returns an iterator that can be used to iterate over the key-value pairs in the map

        keys() - Returns an iterator for keys of map
        values() - returns an iterator for the values of the map
    */

        console.log(studentAges.size); // 5
        console.log(studentAges.get("Jane")); // 19
        console.log(studentAges.has("Jude")); // false
        console.log(studentAges.delete("Phil")); // true = worked
        console.log(studentAges.size);
        studentAges.clear();
        console.log(studentAges.size);

       
        //calls to set() method can be chained
        studentAges.set("Noah",14)
        .set(2,16)
        .set("Ivy",26)
        .set(32,"Jude")
        .set("Tim",34)
        .set("Nick",26);
        

        
        console.log(studentAges); //  maps(4) = {"Noah" => 14, 2 => 16, ...}

        studentAges.delete(2);
        studentAges.delete(32);
        
        ;

        /* ITERATING OVER MAPS
            Using the keys() method and the for-of loop
            
            syntax: 
                for (let i of maps.keys()){
                    // do something with keys i
                }
        */

        for (let student of studentAges.keys()) {
            console.log("Names: ",student);
        }

        /*NB: The for-of loop unlike the for-in loop does not iterate over the names of an array, which are the indexes but the values stored. */

        /* Using the values() method and the for-of loop*/
        for (let ages of studentAges.values()) {
            console.log("Ages:",ages);
        }

        /* Iterating over key-value pair using entries() method */

        for (let entry of studentAges.entries()) {
            console.log("Key:",entry[0]);
            console.log("Value:",entry[1])
        }

        // Alternative via array destructuring

        console.log("\nUsing array destructuring")
        for (let [key,value] of studentAges) {
            console.log("key:",key);
            console.log("value:",value);
        }

        let newStudents = new Map();

        //Copy a map via iteration
        for (let [key,value] of studentAges) {
            newStudents.set(key,value);
        }

        studentAges.clear();
        console.log(studentAges);

        console.log("\nCopied map:\n");
        for (let entry of newStudents){
            console.log(entry[0],entry[1]);
        }

    /* USING WEAK MAPS 
        The WeakMap type is provided by ES, are similar in function as maps but has some slight difference. Keys which are no longer referenced can be delete during gabage collection.
        1. keys can ONLY be objects 
        2. keys(), values(), entries(), size, clear() methods are NOT available
        */

        let teams = new WeakMap();
        let team1 = {
            name: "ManUtd"
        }
        let team2 = {
            name: "Chelsea"
        }
            teams.set(team1,20)
            .set(team2,5);

            console.log(teams.has(team1));
            console.log(teams.get(team2));
            


        


        
       



        



