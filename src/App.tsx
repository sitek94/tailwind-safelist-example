import clsx from 'clsx';

enum ReadingType {
  glucose = 'glucose',
  ketone = "ketone",
  gki = "gki",
  bloodPressure = "bloodPressure",
  fat = "fat",
  heartRate = "heartRate"
}

enum Color {
  blue = 'blue',
  warmGray = 'warmGray',
  gray = 'gray',
  green = 'green',
  red = 'red',
}

export const domainConfig: Record<ReadingType, { color: Color, text: string }> = {
  glucose: {
    text: 'Glucose',
    color: Color.warmGray
  },
  ketone: {
    text: 'Ketones',
    color: Color.blue
  },
  gki: {
    text: 'GKI',
    color: Color.gray
  },
  bloodPressure: {
    text: 'Blood Pressure',
    color: Color.red
  },
  fat: {
    text: 'Fat',
    color: Color.green
  },
  heartRate: {
    text: 'Heart Rate',
    color: Color.red
  }
};


const ReadingTypeList = ({ readingTypes }: { readingTypes: ReadingType[] }) => {
  return (
    <div>
      {readingTypes.map((readingType) => {
        const { color, text } = domainConfig[readingType];
        return (
          <div key={text} className={clsx('p-4', `bg-${color}-500`)}>
            <p className="text-lg">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default function App() {
  return (
    <div className="max-w-sm mx-auto mt-12">
      <ReadingTypeList
        readingTypes={[
          ReadingType.glucose,
          ReadingType.ketone,
          ReadingType.gki,
          ReadingType.bloodPressure,
          ReadingType.fat,
          ReadingType.heartRate,
        ]}
      />
    </div>
  );
}
