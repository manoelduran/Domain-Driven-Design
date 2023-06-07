
import { Slug } from "./slug";

test('It should be able to create a new slug from text', () => {
    const slug = Slug.createFromText('My name is Manoel')
    expect(slug.value).toEqual("my-name-is-manoel")
})