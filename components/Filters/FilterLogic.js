export const groupPostsByLetter = ( posts ) => {

    // latinize letters to deal with umlaute etc.
    const latinize = require('latinize');

    // sort posts alphabetically by name
    posts.sort((a, b) => {
        if(a.name && b.name){
            return latinize(a.name).localeCompare(latinize(b.name), 'es', { sensitivity: 'base' })
        }
    })

    let data = posts.reduce((r, e) => {
    
        // latinize letters to deal with umlaute etc.
        r = latinize(r);
        
        // get first letter of name of current element
        let alphabet = '-';
        if (e.name){
            alphabet = latinize(e.name[0].toUpperCase());
        }
        
        // if there is no property in accumulator with this letter create it
        if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] }
        
        // if there is push current element to children array for that letter
        else r[alphabet].record.push(e);
        
        // return accumulator
        return r;
        }, {});
    
    let result = Object.values(data);

    return result;
}

// export const filterPostsByFormat = ( posts, format) => {
//     // const filteredPosts = post.filter(() => ())
//     return posts;
// }

export const groupPostsByCategory = ( posts ) => {

    // console.log(posts);

    let data = posts.reduce((allFormats, post) => {

        let formats = post.related_formats;
        // console.log(formats);

        if (formats.length === 0){
            // // get the category of current element
            // let format = 'no format'
            
            // // if there is no property in accumulator with this letter create it
            // if (!allFormats[format]) { 
            //     allFormats[format] = { format, record: [post] }
            // }
            
            // // if there is push current element to children array for that letter
            // else {
            //     allFormats[format].record.push(post);
            // }
            
            // return accumulator
            return allFormats;

        } else {
            formats.map(({ title }) => {

                let format = title;
            
                // if there is no property in accumulator with this letter create it
                if (!allFormats[format]) {
                    allFormats[format] = { format, record: [post] }
                }
                
                // if there is push current element to children array for that letter
                else {
                    allFormats[format].record.push(post);
                }

            });
            
            // return accumulator
            return allFormats;

        }

    }, {});
    
    let allFormatsOfPosts = Object.values(data);

    return allFormatsOfPosts;
}