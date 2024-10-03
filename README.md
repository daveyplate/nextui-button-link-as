# nextui-button-link-as

Allows you to chain "as" prop to Next.JS Link components & NextUI Button components.

Currently, when you set the "as" prop on a NextUI Button to a NextJS Link,
it doesn't allow you to also set the "as" prop on that Link to override the visible href.

Example:
    
```jsx
import { LinkAs, ButtonAs } from '@daveyplate/nextui-button-link-as'

export default function Home() {
    return (
        <>
            <Link href="/about?hiddenParam=1" as="/about">
                Normal Link
            </Link>

            <Button as={LinkAs} href="/about?hiddenParam=1" linkAs="/about">
                Button Link
            </Button>

            <Card as={ButtonAs} buttonAs={LinkAs} href="/about?hiddenParam=1" linkAs="/about">
                Card Button Link
            </Card>
        </>
    )
}
```