import { UniqueIdentifier } from "./unique-identifier"

export class BaseEntity<Props> {
    private _id: UniqueIdentifier
    protected props: Props
    get id () {
        return this._id
    }
     constructor(props: Props, id?: string) {
        this.props = props
        this._id = new UniqueIdentifier(id)
     }
}