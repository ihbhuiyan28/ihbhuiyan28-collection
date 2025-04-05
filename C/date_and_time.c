#include <stdio.h>
#include <time.h>

int main()
{
    time_t c_time = time(NULL);
    printf("%ld\n", c_time);

    char *current_time = ctime(&c_time);
    printf("%s", current_time);

    struct tm *local_time = localtime(&c_time);
    printf("%02d:%02d:%02d\n", local_time->tm_hour, local_time->tm_min, local_time->tm_sec);

    char *local_asc_time = asctime(local_time);
    printf("%s", local_asc_time);

    struct tm *gmt_time = gmtime(&c_time);
    printf("%02d:%02d:%02d\n", gmt_time->tm_hour, gmt_time->tm_min, gmt_time->tm_sec);

    char *local_gmt_time = asctime(local_time);
    printf("%s", local_gmt_time);

    char buffer[26];
    strftime(buffer, sizeof(buffer), "%Y-%m-%d %H:%M:%S", local_time);
    printf("%s\n", buffer);

    time_t diff_start = time(NULL);

    int index = 0;
    while (index < 1000000000)
        index++;

    time_t diff_end = time(NULL);

    double diff_time = difftime(diff_end, diff_start);

    printf("%ld\n", diff_start);
    printf("%ld\n", diff_end);
    printf("%lf\n", diff_time);

    clock_t clock_start = clock();

    index = 0;
    while (index < 1000000000)
        index++;

    clock_t clock_end = clock();

    double clock_time = (double)(clock_end - clock_start) / CLOCKS_PER_SEC;

    printf("%ld\n", clock_start);
    printf("%ld\n", clock_end);
    printf("%lf\n", clock_time);

    return 0;
}