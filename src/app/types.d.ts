// declare module 'react' {
//     interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
//         color: 'primary' | 'standard' | 'default' | 'basic';
//     }

//     interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
//         color: 'primary' | 'standard' | 'default' | 'basic';
//     }
//     interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
//         color: 'primary' | 'standard' | 'default' | 'basic';
//     }
//     interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
//         color: 'primary' | 'standard' | 'default' | 'basic';
//     }

// }


// export { };
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}