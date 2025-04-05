import java.time.Duration;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateAndTime {

    public static void main(String[] args) {
        
        LocalDateTime currentLocalDateTime = LocalDateTime.now();
        System.out.println(currentLocalDateTime);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = currentLocalDateTime.format(formatter);
        System.out.println(formattedDateTime);

        Instant instantStart = Instant.now();

        int index = 0;
        while (index < 1000000000)
            index++;
        
        Instant instantEnd = Instant.now();
        
        Duration instantDiff = Duration.between(instantStart, instantEnd);
        System.out.println(instantDiff.toMillis());

        long currTimeStart = System.currentTimeMillis();

        index = 0;
        while (index < 1000000000)
            index++;
        
        long currTimeEnd = System.currentTimeMillis();

        long currTimeDiff = currTimeEnd - currTimeStart;
        System.out.println(currTimeDiff);

    }

}