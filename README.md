# Test Backend Ultra Voucher

## Bio
- Name: Ma'sum
- Email: mclasix@gmail.com
- Portofolio: [masumdev.com](https://masumdev.com)

## 🧩 Logical Test

### 1: Algoritma Pengelompokan Anagram

#### Deskripsi Masalah
Buat fungsi untuk mengelompokkan string menjadi koleksi anagram tanpa menggunakan metode array bawaan.

#### Input
```javascript
const words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
```

#### Output
```javascript
[
  ['cook'],
  ['save', 'aves', 'vase'],
  ['taste', 'state'],
  ['map']
]
```

#### Detail Implementasi

##### Komponen Algoritma
1. `sortString()`: Metode pengurutan karakter khusus
2. `isAnagram()`: Fungsi verifikasi anagram
3. Pemrosesan array manual

##### Implementasi Kode
```javascript
function groupAnagrams(words) {
  function sortString(str) {
    let charArray = [];

    for (let i = 0; i < str.length; i++) {
      charArray.push(str[i]);
    }

    for (let i = 0; i < charArray.length - 1; i++) {
      for (let j = 0; j < charArray.length - i - 1; j++) {
        if (charArray[j] > charArray[j + 1]) {
          let temp = charArray[j];
          charArray[j] = charArray[j + 1];
          charArray[j + 1] = temp;
        }
      }
    }

    let sortedStr = "";
    for (let i = 0; i < charArray.length; i++) {
      sortedStr += charArray[i];
    }
    return sortedStr;
  }

  function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let sorted1 = sortString(str1);
    let sorted2 = sortString(str2);

    for (let i = 0; i < sorted1.length; i++) {
      if (sorted1[i] !== sorted2[i]) return false;
    }
    return true;
  }

  let result = [];
  let processed = [];

  for (let i = 0; i < words.length; i++) {
    let isProcessed = processed.includes(words[i]);
    if (isProcessed) continue;

    let currentGroup = [words[i]];
    processed.push(words[i]);

    for (let j = i + 1; j < words.length; j++) {
      if (isAnagram(words[i], words[j])) {
        currentGroup.push(words[j]);
        processed.push(words[j]);
      }
    }

    result.push(currentGroup);
  }

  return result;
}
```

### 2: Query SQL

#### Skema Basis Data
```sql
CREATE TABLE people (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    parent_id INT
);
```

#### Data Contoh
```sql
INSERT INTO people (id, name, parent_id) VALUES
    (1, 'Zaki', 2),
    (2, 'Ilham', NULL),
    (3, 'Irwan', 2),
    (4, 'Arka', 3);
```

#### Implementasi Query
```sql
SELECT
    a.id,
    a.name,
    (
        SELECT b.name
        FROM people b
        WHERE b.id = a.parent_id
    ) as parent_name
FROM
    people a
ORDER BY
    a.id;
```

#### Hasil yang Diharapkan
| id | name  | parent_name |
|----|-------|-------------|
| 1  | Zaki  | Ilham       |
| 2  | Ilham | NULL        |
| 3  | Irwan | Ilham       |
| 4  | Arka  | Irwan       |