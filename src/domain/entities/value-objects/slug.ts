export class Slug {
    public value: string
    constructor(value: string) {
        this.value = value
    }
    /* This method receives a text to create a slug.
            Example:
                "An example title" => än-example-title"
    */
    static createFromText = (text: string) => {
        const slug = text.normalize('NFKD').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/_/g, '-').replace(/--+/g, '-').replace(/-$/g, '')
        return new Slug(slug)
    }
}