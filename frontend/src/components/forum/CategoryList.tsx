import { UnorderedList } from "@chakra-ui/react";
import { map } from "lodash/fp";
import { FC, forwardRef, useCallback, useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { Category } from "src/types/_generated_Forum";
import { CategoryListItem } from "./CategoryListItem";
import { useUpdateCategories } from "./hooks";

type Props = {
  categories: Category[];
};

// eslint-disable-next-line react/display-name
const ListContainer = forwardRef<HTMLUListElement>((props, ref) => {
  return (
    <UnorderedList
      ref={ref}
      margin="0"
      padding="0"
      display="flex"
      gridGap="0.5em"
      flexDir="column"
    >
      {props.children}
    </UnorderedList>
  );
});

const CategoryList: FC<Props> = ({ categories }) => {
  const [list, setList] = useState<Category[]>([]);
  const updateCategories = useUpdateCategories();
  const onSort = useCallback(() => {
    const listWithSortField = list.map((c, i) => ({ ...c, sort: i }));
    updateCategories(listWithSortField);
  }, [updateCategories, list]);

  useEffect(() => setList(categories), [categories]);

  const onMove = useCallback(
    (idx: number, start: boolean) => {
      const item = list[idx];
      const without = list;
      without.splice(idx, 1);
      console.log(without);
      if (start) {
        setList([item, ...without]);
        onSort();
      } else {
        setList([...without, item]);
        onSort();
      }
    },
    [list, onSort]
  );

  const categoriesToList = map((c: Category) => (
    <CategoryListItem key={c.id} category={c} onMove={onMove} />
  ));

  return (
    <ReactSortable
      tag={ListContainer}
      list={list as any}
      setList={setList as any}
      animation={200}
      delayOnTouchOnly={true}
      handle=".drag-handle"
      onSort={onSort}
    >
      {categoriesToList(list)}
    </ReactSortable>
  );
};

export default CategoryList;
