import { UniqueIdentifier } from "./unique-identifier"

export class BaseEntity<Props> {
    private _id: UniqueIdentifier
    protected props: Props
    get id () {
        return this._id
    }
    protected constructor(props: Props, id?: UniqueIdentifier) {
        this.props = props
        this._id = id ?? new UniqueIdentifier()
     }
}