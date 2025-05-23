# React + TypeScript + Vite

## TypeScript + React: UploadNames-komponent
Den här komponenten låter användare skriva in namn som läggs till i en lista. Vi använder useState och TypeScript-typer för att skriva mer robust kod.

##  Centrala begrepp
Begrepp	Förklaring
---
1. useState<string[]>()	Skapar en state-variabel som är en array av strängar
2. useState<string>('')	Skapar en state-variabel för textfältets innehåll
3. React.ChangeEvent<HTMLInputElement>	
: Typ som beskriver en onChange händelse från ett input-element
4. prev => [...prev, input]	Lägger till ett nytt namn sist i listan utan att ta bort tidigare namn
5. key={index}	Ger varje <p> en unik nyckel (här används index — okej för enkel data)
6. placeholder="..."	Förifylld text i textfältet innan användaren skriver något

##  Vad gör komponenten?
```tsx
const [names, setNames] = useState<string[]>(() => lazyInitState());
```
- Skapar en lista names som innehåller strängar.

- lazyInitState() körs bara första gången komponenten renderas.

```tsx
const [input, setInput] = useState<string>('');
input håller koll på vad användaren skriver i textrutan.
```

##  Funktioner
```tsx
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setInput(e.target.value);
};
```
- När användaren skriver något → sparas det i input.

```tsx
const handleUpload = () => {
  if (!input.trim()) return;
  setNames(prev => [...prev, input]);
  setInput('');
};
```
- Om input inte är tomt:

- Lägg till det i slutet av names.

- Töm input-fältet.

TSX-rendering
```tsx
return (
  <div className="container">
    <div className="upload-box">
      <input ... />
      <button>Upload</button>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  </div>
);
````

- Allt är snyggt centrerat med hjälp av CSS-klasserna .container och .upload-box.

- Varje namn visas som ett <p>-element.

## Tips för nybörjare
- string[]: betyder en array av text (ex: ['a', 'b'])

- <string[]>: så här berättar du att en state är en sträng-array

- React.ChangeEvent<HTMLInputElement> är typningen av onChange eventet

- TypeScript hjälper dig skriva säkrare kod och få felmeddelanden direkt





