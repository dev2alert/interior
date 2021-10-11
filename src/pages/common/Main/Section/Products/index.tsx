import * as React from "react";
import styles from "./style.scss";
import Item, {IProduct} from "./Item";

export interface ListProps {
    columns?: number;
    itemSize?: number;
    hover?: boolean;
    children: IProduct[];
}

export default function Products({columns, itemSize, hover, children}: ListProps): React.ReactElement {
    const style: any = {};
    if(columns)
        style["--columns"] = columns;
    if(itemSize)
        style["--image-size"] = `${itemSize}px`;
    return <div className={styles.main} style={style}>
        {children.map((item) => {
            return <Item key={item.id} hover={hover} {...item} />;
        })}
    </div>;
}