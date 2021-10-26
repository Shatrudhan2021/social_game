class ApiFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    filter() {
        const queryObj = { ...this.queryString }
        const excludedField = ['page', 'sort'];
        excludedField.forEach(element => {
            return delete queryObj[element]
        });
        let querystr = JSON.stringify(queryObj);

        querystr = querystr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        


        this.query.find(JSON.parse(querystr));


        return this;
    }
    sorting() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.split(",").join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort("-createAt");
        }
        return this;
    }
    
}
module.exports = ApiFeatures;